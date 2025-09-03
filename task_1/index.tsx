import { Component, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

const isEqual = (prev: IUser, next: IUser) => {
  return prev.name === next.name && prev.age === next.age;
};

const isEqualIProps = (prev: IProps, next: IProps) => {
  return isEqual(prev.user, next.user);
};

export const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, isEqual);

export const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, isEqualIProps);

export class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(next) {
    return !isEqual(this.props, next);
  }

  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(next) {
    return !isEqualIProps(this.props, next);
  }

  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
