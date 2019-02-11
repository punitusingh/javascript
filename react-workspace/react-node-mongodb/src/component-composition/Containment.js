import React from 'react';

import WelcomeDialog from './WelcomeDialog';
import SplitPaneApp from './SplitPane';

export default function (props) {
  return (
    <div>
      <WelcomeDialog/>
      <SplitPaneApp/>
    </div>
  );
}