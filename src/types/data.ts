/* The code is defining an interface named `ITodo` in TypeScript. An interface is a way to define the
structure of an object. In this case, the `ITodo` interface has three properties: `id` of type
`number`, `title` of type `string`, and `complete` of type `boolean`. This interface can be used to
define objects that have these properties and their corresponding types. The `export` keyword is
used to make the interface accessible outside of the current module. */
export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}