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
  // function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {

  // }
  const value: unknown = 42;
  const someString: string = value as string;
  console.log(someString)
  // const otherString = someString.toUpperCase() runtime error
})();
