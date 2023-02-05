interface BoxInterface {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
  remove: Function;
}

/** Colored box presentation, along with removeButton
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

const Box: React.FC<BoxInterface> = ({ id, width = 5, height = 5, backgroundColor, remove }) => {
  /** Remove a box. */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div
        className="Box-box"
        data-testid={`box-${id}`}
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor,
        }}
      />
      <button className="Box-removeBtn" onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
