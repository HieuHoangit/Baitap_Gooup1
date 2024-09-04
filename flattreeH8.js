let idCounter = 1;

function flattenTree(node, parentPosition = "", parentId = null) {
  const position = parentPosition
    ? `${node.name} > ${parentPosition}`
    : node.name;

  const flatNode = {
    id: idCounter++,
    name: node.name,
    position: position,
    parentId: parentId,
  };

  const flatList = [flatNode];

  if (node.children) {
    for (const child of node.children) {
      flatList.push(...flattenTree(child, position, flatNode.id));
    }
  }

  return flatList;
}

const organizationTree = {
  name: "CEO",
  children: [
    {
      name: "CFO",
      children: [
        {
          name: "Finance Manager",
          children: [
            { name: "Senior Accountant" },
            { name: "Junior Accountant" },
          ],
        },
        {
          name: "Investment Manager",
          children: [
            { name: "Financial Analyst I" },
            { name: "Financial Analyst II" },
          ],
        },
      ],
    },
    {
      name: "CTO",
      children: [
        {
          name: "Engineering Manager",
          children: [
            { name: "Lead Developer" },
            { name: "Senior Developer" },
            { name: "Junior Developer" },
          ],
        },
        {
          name: "QA Manager",
          children: [
            { name: "Lead QA Engineer" },
            { name: "QA Engineer I" },
            { name: "QA Engineer II" },
          ],
        },
      ],
    },
    {
      name: "COO",
      children: [
        {
          name: "Operations Manager",
          children: [{ name: "HR Manager" }, { name: "Office Coordinator" }],
        },
        {
          name: "Customer Relations Manager",
          children: [
            { name: "Customer Support Specialist I" },
            { name: "Customer Support Specialist II" },
          ],
        },
      ],
    },
  ],
};

const flatList = flattenTree(organizationTree);

console.log(flatList);
