export default function PageHeader({ title, breadcrumbs, children }) {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        <PageTitle title={title} />
        <Breadcrumb links={breadcrumbs} />
      </div>
      <div id="action-button">{children}</div>
    </div>
  );
}

function PageTitle({ title }) {
  return (
    <span id="page-title" className="text-3xl font-semibold">
      {title}
    </span>
  );
}

function Breadcrumb({ links }) {
  return (
    <div
      id="breadcrumb-links"
      className="flex items-center font-medium space-x-2 mt-2"
    >
      {links.map((link, index) => (
        <span
          key={index}
          id={
            index === 0
              ? "breadcrumb-home"
              : index === links.length - 1
              ? "breadcrumb-current"
              : `breadcrumb-${index}`
          }
          className="text-gray-500"
        >
          {link}
          {index < links.length - 1 && (
            <span id="breadcrumb-separator" className="text-gray-500">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
