type TMethod = { [methodKey: string]: any }
type TData = { [dataKey: string]: any }

export type TViewModel = {
  data: TData,
  methods: TMethod,
}
