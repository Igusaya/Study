import React, { FC } from 'react';
import { Button, Card, Icon, Statistic, ButtonGroup } from 'semantic-ui-react';

import './App.css';

interface AppProps {
  timeLeft: number;
  reset: () => void;
  start: () => void;
  stop: () => void;
}

const AppComponent: FC<AppProps> = ({ timeLeft, reset, start, stop }) => (
  <div className="container">
    <header>
      <h1>ポモドーロ タイマー</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value>{timeLeft}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <ButtonGroup fluid>
          <Button color="blue" onClick={start}>
            Start
          </Button>
          <Button color="red" onClick={stop}>
            Stop
          </Button>
        </ButtonGroup>
        <Button color="yellow" fluid onClick={reset}>
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  </div>
);

export default AppComponent;
