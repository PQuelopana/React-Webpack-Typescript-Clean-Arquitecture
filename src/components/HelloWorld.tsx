import React, { FC } from 'react';

interface HelloProps {
  compiler: string;
  framework: string;
};

export const HelloWorld: FC<HelloProps> = ({
  compiler,
  framework
}) => (
  <h1>Hello from {compiler} and {framework}</h1>
);
