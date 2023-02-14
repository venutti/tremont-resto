import Container from "../components/Container";
import data from "../data";

export default function MenuPage() {
  const renderedCategories = data.map((category) => {
    const renderedItem = (item) => {
      return (
        <div
          key={item.name}
          className="text-sm flex gap-2 justify-between p-2 border-b border-slate-400"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className=" text-xs">{item.description}</p>
          </div>
          <div className="text-lg">${item.price}</div>
        </div>
      );
    };

    const renderedSubcategory = (subcategory) => {
      return (
        <div key={subcategory.name} className="mb-4">
          <h3 className="text-2xl text-slate-600 font-medium">
            {subcategory.name}
          </h3>
          {subcategory.items.map(renderedItem)}
        </div>
      );
    };

    return (
      <div
        key={category.name}
        className="m-4 p-4 border-2 border-slate-500 rounded"
      >
        <h3 className="text-3xl px-2 mb-2 bg-slate-600 border-y-4 border-slate-800">
          {category.name}
        </h3>
        {category.items.map(renderedSubcategory)}
      </div>
    );
  });

  return (
    <div className="grow bg-black text-white">
      <Container>
        <h2 className="text-4xl text-center w-3/4 mx-auto pt-4 pb-2 border-b-2 border-white">
          MENU
        </h2>
        {renderedCategories}
      </Container>
    </div>
  );
}
