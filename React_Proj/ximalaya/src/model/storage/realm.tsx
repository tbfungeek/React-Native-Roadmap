import Realm from 'realm';
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

const realm = new Realm({schema: [Program]});

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
