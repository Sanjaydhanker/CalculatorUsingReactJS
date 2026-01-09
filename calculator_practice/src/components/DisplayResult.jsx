function DisplayResult({ displayValue }) {
  return (
    <div>
      <input
        className="border outline-0 rounded w-full text-4xl p-2 mb-3"
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
}

export default DisplayResult;
