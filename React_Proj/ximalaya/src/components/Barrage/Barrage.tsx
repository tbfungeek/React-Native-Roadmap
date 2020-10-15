import {screenWidth} from '@/utils/DimensionsUtils';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Message} from '../../screens/pages/Player/PlayerScreen';
import BarrageItem from './BarrageItem';

interface IProps {
  data: Message[];
  maxTrack: number;
}

export interface IBarrage extends Message {
  trackerIndex: number;
}

interface IState {
  data: Message[];
  list: IBarrage[][];
}

function getAvailableTrackIndex(list: IBarrage[][], maxTrack: number): number {
  for (let i = 0; i < maxTrack; i++) {
    const barrageChannelOfTrack = list[i];
    if (!barrageChannelOfTrack || barrageChannelOfTrack.length === 0) {
      return i;
    }
  }
  return -1;
}

function addBarrage(data: Message[], maxTrack: number, list: IBarrage[][]) {
  for (let i = 0; i < data.length; i++) {
    const trackerIndex = getAvailableTrackIndex(list, maxTrack);
    if (trackerIndex === -1) {
      continue;
    }
    if (!list[trackerIndex]) {
      list[trackerIndex] = [];
    }
    const barrage = {
      ...data[i],
      trackerIndex,
    };
    list[trackerIndex].push(barrage);
  }
  return list;
}
class Barrage extends React.Component<IProps, IState> {
  state = {
    data: this.props.data,
    list: [this.props.data.map((item) => ({...item, trackerIndex: 0}))],
  };

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const {data, maxTrack} = nextProps;
    if (data !== prevState.data) {
      return {
        data,
        list: addBarrage(data, maxTrack, prevState.list),
      };
    }
    return null;
  }

  outside = (data: IBarrage) => {
    const {list} = this.state;
    let newList = list.slice();
    if (newList.length > 0) {
      const {trackerIndex} = data;
      newList[trackerIndex] = newList[trackerIndex].filter((item) => {
        item.id !== data.id;
      });
      this.setState({
        list: newList,
      });
    }
  };

  renderItem = (barrageChannel: IBarrage[]) => {
    for (let index = 0; index < barrageChannel.length; index++) {
      let barrageItem = barrageChannel[index];
      return (
        <BarrageItem
          key={barrageItem.id}
          data={barrageItem}
          outside={this.outside}
        />
      );
    }
  };

  render() {
    const {list} = this.state;
    return <View style={styles.container}>{list.map(this.renderItem)}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    height: screenWidth,
    width: screenWidth,
  },
});

export default Barrage;
