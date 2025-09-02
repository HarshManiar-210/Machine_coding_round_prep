import React from "react";

export default function Checkbox({ data, active, setActive, parent = null }) {
  const handleCheckboxChange = (isChecked, node, parent) => {
    setActive((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // -------- DOWNWARD UPDATE (parent → children) ----------
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        });
      };
      updateChildren(node);

      // -------- UPWARD UPDATE (child → parent) ----------
      const updateParent = (node) => {
        if (!node) return;

        const allChecked = node.children.every((child) => newState[child.id]);
        // fully checked if all children checked
        newState[node.id] = allChecked;
      };
      updateParent(parent);

      return newState;
    });
  };

  return (
    <div className="node__list ml-4">
      {data.map((node) => {
        // attach parent reference for upward traversal
        if (node.children) {
          node.children.forEach((child) => {
            child.__parent = node;
          });
        }

        return (
          <div className="node__parent" key={node.id}>
            <input
              type="checkbox"
              checked={active[node.id] || false}
              onChange={(e) =>
                handleCheckboxChange(e.target.checked, node, parent)
              }
            />
            <span className="node__parent--title">{node.label}</span>

            {node.children && (
              <Checkbox
                data={node.children}
                active={active}
                setActive={setActive}
                parent={node}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
