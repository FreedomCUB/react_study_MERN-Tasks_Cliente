import {
  TASKS_PROJECT,
  ADD_TASK,
  ERROR_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          task => task.projectId === action.payload
        )
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTask: false
      };
    case ERROR_TASK:
      return {
        ...state,
        errorTask: true
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasksProject.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
        selectedTask: null
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedTask: action.payload
      };

    default:
      return state;
  }
};
