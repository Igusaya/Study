const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      roket: {
        id: launch.roket.roket_id,
        name: launch.roket.roket_name,
        type: launch.roket.roket_type,
      },
    };
  }

  async getAllLaunches() {
    const response = await this.get('launches');
    return Array.isArray(response) 
      ? response.map(launch => this.launchReducer(launch)) : [];
  }

  async getLaunchById({ launchId }) {
    const response = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(response[0]);
  }

  async getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId }))
    )
  }
}

module.exports = LaunchAPI;