import * as React from 'react';
import { withRouter } from 'react-router-dom'
import './{{template}}.css';
interface Props {

}
interface State {

}
@withRouter

  class {{ template }} extends React.Component < Props, State > {
    constructor(props: Props) {
      super(props);
      this.state = {

      };
    }
  
    static getDerivedStateFromProps(nextProps: object, prevState: object) {

      return null
    }
  
  
    componentDidMount() { }
  
  
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    // 记忆上一次
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // 如果 `props.list` 增加，将原来的 scrollHeight 存入 listRef
      if (prevProps.list.length < this.props.list.length) {
        return this.listRef.scrollHeight
      }
      return null
    }
  // snapshot 快照
  
    componentDidUpdate(prevProps, prevState, snapshot) { }
  
    componentWillUnmount() { }
  
  
    render() {
      return (
        <div className="{{template}}">
          {{ template }}
        </div>
      );
    }
  }

export default {{template}}