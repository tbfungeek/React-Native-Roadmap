import {lte} from 'lodash';
import Realm, {schemaVersion} from 'realm';
export interface IProgram {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: number;
}

class Program {
  static schema = {
    name: 'Program',
    primaryKey: 'id',
    properties: {
      id: 'string',
      title: 'string',
      thumbnailUrl: 'string',
      duration: {type: 'double', default: 0},
    },
  };
}

const realm = new Realm({
  schema: [Program],
  schemaVersion: 1,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 1) {
      const oldObjects = oldRealm.objects<IProgram>('Program');
      const newObjects = newRealm.objects<IProgram>('Program');
      for (let i = 0; i < oldObjects.length; i++) {
        //这里执行新旧表迁移，这里只是简单的一个例子
        newObjects[i].id = oldObjects[i].id;
      }
    }
  },
});

export function saveProgram(data: Partial<IProgram>) {
  try {
    realm.write(() => {
      realm.create('Program', data);
    });
  } catch (error) {
    console.log(error);
  }
}

export default realm;
