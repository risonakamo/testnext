import React from "react";
import ImageViewer,{FullScreenViewer} from "iv-viewer";

import "iv-viewer/dist/iv-viewer.css";

export default class Home extends React.Component
{
  constructor(props)
  {
    super(props);
    this.showViewer=this.showViewer.bind(this);

    // this.viewer;*
  }

  componentDidMount()
  {
    this.viewer=new FullScreenViewer();
  }

  showViewer(e)
  {
    new ImageViewer(e.currentTarget);
  }

  render()
  {
    return <>
      <p>oi</p>
      <img src="/static/raven1.jpg" onClick={this.showViewer}/>
    </>;
  }
}