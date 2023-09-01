import { ToDoList } from '../../../views/ToDoList';
import { TaskDetails } from "../../../views/TaskDetails";
import { RoutesEnum } from '../../types/Routes.enum';
import { Route } from '../../types/Route';


export const routes: Array<Route> = [
  {
    path: RoutesEnum.FrontPage,
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
  {
    path: RoutesEnum.Details,
    Component: <TaskDetails />,
    isPublic: false,
    Icon: null,
  },
];
