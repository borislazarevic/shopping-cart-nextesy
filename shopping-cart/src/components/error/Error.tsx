interface ErrorProps {
  statusCode: number;
}

export const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div className="error-wrapper">
      <p className="error-message">
        The information you are trying to reach is currently unavailable.
      </p>
      <p className="error-status-code">Status code: {statusCode}</p>
    </div>
  );
};
