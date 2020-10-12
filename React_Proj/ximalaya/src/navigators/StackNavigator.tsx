import {
  NavigationContainer,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import PlayerScreen from '@/screens/pages/Player/PlayerScreen';
import Category from '@/screens/pages/Category/CategoryScreen';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import Album from '../screens/pages/Album/AlbumScreen';
import Animated from 'react-native-reanimated';
import Icon from '@/assets/iconfont';

/**
 * 路由传值类型定义
 */
export type RootStackParamList = {
  TabNavigator: {
    screen: string;
  };
  PlayerScreen: {
    id: number;
  };
  Album: {
    item: {
      id: string;
      title: string;
      image: string;
    };
  };
  Category: {};
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type DetailRouteProp = RouteProp<RootStackParamList, 'PlayerScreen'>;
export type TabRouteProp = RouteProp<RootStackParamList, 'TabNavigator'> & {
  state?: TabNavigationState;
};

const Stack = createStackNavigator<RootStackParamList>();

function getAlbumOptions({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Album'>;
}) {
  return {
    headerTitle: route.params.item.title,
    //透明标题栏
    headerTransparent: true,
    headerTitleStyle: {
      opacity: 0,
    },
    //透明标题栏
    headerBackground: () => {
      return <Animated.View style={styles.headerBackground} />;
    },
  };
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0,
  },
  headerBackImage: {
    marginHorizontal: 8,
  },
});

function RootStackScreens() {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        headerTitle: '首页',
        headerTitleAlign: 'center',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerStatusBarHeight: StatusBar.currentHeight,
        headerTitleStyle: {
          color: 'white',
          fontSize: 16,
        },
        headerStyle: {
          backgroundColor: '#e94922',
          ...Platform.select({
            android: {
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          }),
        },
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Album" component={Album} options={getAlbumOptions} />
    </Stack.Navigator>
  );
}

/**
 * 定义每个界面传递参数的类型
 */
export type ModelStackParamList = {
  Root: undefined /** 跳转到Root页面传递的参数 */;
  PlayerScreen: undefined /** 跳转到Detail页面传递的参数 */;
};

/**
 * 创建出对应的导航器
 */
const ModelStack = createStackNavigator<ModelStackParamList>();

function ModelStackScreens() {
  return (
    <ModelStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
        headerBackTitleVisible: false,
      }}>
      <ModelStack.Screen
        name="Root"
        component={RootStackScreens}
        options={{headerShown: false}}
      />
      <ModelStack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{
          headerTintColor: '#fff',
          headerTitle: '',
          headerTransparent: true,
          cardStyle: {backgroundColor: '#807c66'},
          headerBackImage: ({tintColor}) => (
            <Icon
              name="icondown"
              color={tintColor}
              size={18}
              style={styles.headerBackImage}
            />
          ),
        }}
      />
    </ModelStack.Navigator>
  );
}

export type ModelStackNavigation = StackNavigationProp<ModelStackParamList>;

export default class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <ModelStackScreens />
      </NavigationContainer>
    );
  }
}
