import React from 'react';
// React icons

import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';

export const navbarItems = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text',
  },
  {
    title: 'Todo List',
    path: '/todo',
    icon: <RiIcons.RiCalendarTodoLine />,
    className: 'nav-text',
  },
  {
    title: 'Expense Tracker',
    path: '/expense',
    icon: <FaIcons.FaMoneyCheckAlt />,
    className: 'nav-text',
  },
  {
    title: 'Fitness',
    path: '/fitness',
    icon: <IoIcons.IoFitnessOutline />,
    className: 'nav-text',
  },
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineLogin />,
    className: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    className: 'nav-text',
  },
];
