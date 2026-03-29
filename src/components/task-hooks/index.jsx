import React, {createContext, useState, useContext} from "react";
import taskData from "../../task-data.json";
import {v4} from "uuid";
import {TaskContext} from "../..";


export const useTasks = () => useContext(TaskContext);

