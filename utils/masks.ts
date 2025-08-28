export const mask = {
  onlyNumbers: (value: string) => value.replace(/\D/g, ""),
  phoneNumber: (value: string) =>
    mask
      .onlyNumbers(value)
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15),
};
