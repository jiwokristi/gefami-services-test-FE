import { Column } from '../../../components/Table';

import { Post } from '../../api/post';

export const postColumns: Column<Post>[] = [
  {
    header: 'ID',
    key: 'id',
  },
  {
    header: 'User ID',
    key: 'userId',
    width: 'w-[10rem]',
  },
  {
    header: 'Title',
    key: 'title',
  },
  {
    header: 'Body',
    key: 'body',
  },
];
