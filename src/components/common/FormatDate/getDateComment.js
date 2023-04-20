const date = new Date()
const options = { year: 'numeric', month: 'long', day: 'numeric' };
export const timeComment = date.toLocaleDateString("en-US", options)