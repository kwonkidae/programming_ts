import { stringify } from "querystring";

const l = console.log;
(() => {
  // type Filter = {
  //   (array: number[], f: (item: number) => boolean): number[]
  //   (array: string[], f: (item: string) => boolean): string[]
  //   (array: object[], f: (item: object) => boolean): object[]
  // }

  // let names = [
  //   {firstName: "beth"},
  //   {firstName: "caitlyn"},
  //   {firstName: "xin"}
  // ]

  // let result = filter(
  //   names,
  //   _ => _.firstName.startWith("b")
  // )

  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }

  const filter: Filter = (array, f) => {
    const result =[];
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      if (f(item)) {
        result.push(item)
      }
    }
    return result
  }

  l(filter([1, 2, 3], _ => _ > 2))
  let names = [
    {firstName: "beth"},
    {firstName: "caitlyn"},
    {firstName: "xin"}
  ]
  l(filter(names, _ => _.firstName.startsWith("b")))
})();

(() => {
  function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i])
    }
    return result
  }
  const value: unknown = 42;
  const someString: string = value as string;
  console.log(someString)
  // const otherString = someString.toUpperCase() runtime error

  l(map(["a", "b", "c"], _ => _ === "a"))
  l(map<string, boolean | string>(["a", "b", "c"], _ => _ === "a"))

  let promise = new Promise<number>(resolve => resolve(45))
  promise.then(result => result * 4)
})();

// tree
(() => {
  type TreeNode = {
    value: string
  }

  type LeafNode = TreeNode & {
    isLeaf: true
  }

  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
  }

  let a: TreeNode = {value: "a"}
  let b: LeafNode = {value: "b", isLeaf: true}
  let c: InnerNode = {value: "c", children: [b]}

  let a1 = mapNode(a, _ => _.toUpperCase())
  l(a1)
  let b1 = mapNode(b, _ => _.toUpperCase())
  l(b1)
  let c1 = mapNode(c, _ => _.toUpperCase())
  l(c1)
  function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
  ): T {
    return {
      ...node,
      value: f(node.value)
    }
  }

  type HasSides = { numberOfSides: number }
  type SidesHaveLength = { sideLength: number }

  function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength)
    return s
  }

  type Square = HasSides & SidesHaveLength
  let square: Square = { numberOfSides: 4, sideLength: 3}
  logPerimeter(square)

  // model arity

  function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
  ): R {
    return f(...args)
  }

  function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
  }

  l(call(fill, 10, "a"))
})();