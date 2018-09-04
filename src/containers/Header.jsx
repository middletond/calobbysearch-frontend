import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { updateStickyControls } from "../actions/controls";

const STICKY_CONTROLS_THRESH = 300;
const SCROLL_LISTENER_INTERVAL = 200;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onWindowScroll = this.onWindowScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll",
      _.throttle(this.onWindowScroll, SCROLL_LISTENER_INTERVAL)
    )
  }

  onWindowScroll() {
    const shouldBeSticky = (window.scrollY >= STICKY_CONTROLS_THRESH);
    const isSticky = this.props.stickyControls;
    if (!isSticky && shouldBeSticky) {
      this.props.dispatch(updateStickyControls(true));
    }
    else if (isSticky && !shouldBeSticky) {
      this.props.dispatch(updateStickyControls(false));
    }
  }

  render() {
    return (
      <header className={(this.props.stickyControls) ? "hide" : ""}>
        <h1 className="logo">
          California State Lobbying Search
        </h1>
      </header>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stickyControls: state.controls.sticky
  }
}

export default connect(mapStateToProps)(Header);
