export function buildSchema(mode, questionText) {
  if (mode === "rating") {
    return [
      { id: "name", type: "text", label: "Jméno" },
      { id: "rating", type: "number", label: questionText || "Hodnocení 1–5" },
      { id: "note", type: "textarea", label: "Poznámka" }
    ];
  }

  if (mode === "question") {
    return [
      { id: "answer", type: "textarea", label: questionText || "Vaše odpověď" }
    ];
  }

  if (mode === "info") {
    return [
      { id: "info", type: "info", label: questionText || "Informace" }
    ];
  }

  return [];
}

export function detectModeFromSchema(schema) {
  if (!Array.isArray(schema) || !schema.length) return "rating";
  if (schema.some(item => item.type === "info")) return "info";
  if (schema.length === 1 && schema[0].id === "answer") return "question";
  return "rating";
}

export function getQuestionFromSchema(schema, mode) {
  if (!Array.isArray(schema) || !schema.length) return "";

  const defaults = {
    rating: "Hodnocení 1–5",
    question: "Vaše odpověď",
    info: "Informace"
  };

  const fieldIds = {
    rating: "rating",
    question: "answer",
    info: "info"
  };

  const field = schema.find(item => item.id === fieldIds[mode]);
  if (!field?.label || field.label === defaults[mode]) return "";
  return field.label;
}