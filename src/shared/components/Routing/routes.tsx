import { ToDoList } from '../../../views/ToDoList';
import { RoutesEnum } from '../../types/Routes.enum';
import { Route } from '../../types/Route';

export const routes: Array<Route> = [
  {
    path: RoutesEnum.LogIn,
    Component: <ToDoList />,
    isPublic: true,
    Icon: null,
  },
  {
    path: RoutesEnum.Fallback,
    Component: <ToDoList />,
    isPublic: true,
    Icon: null,
  },
];
