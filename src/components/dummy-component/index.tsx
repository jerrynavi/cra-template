type Props = {
  message?: string;
};

const DummyComponent = ({ message }: Props) => {
  return <p>I am a dummy component with message, {message}</p>;
};

export default DummyComponent;
