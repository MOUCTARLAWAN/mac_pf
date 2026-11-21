import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6 space-y-4 bg-white max-h-[70vh] overflow-y-auto">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full max-h-60 object-cover rounded-lg"
          />
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        )}

        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          {Array.isArray(description) ? (
            description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
