export default function Example({ input, setInput }) {
  return (
    <select value={input} onChange={(e) => setInput(e.target.value)} className="rounded-lg">
      <option value="html">HTML</option>
      <option value="react">React</option>
    </select>
  );
}
