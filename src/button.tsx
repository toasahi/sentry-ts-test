type Props = {
    children: React.ReactNode;
}

export const Button:React.FC<Props> = (props) => {

    const methodDoesNotExist = () => {
        throw new Error("typescriptを追加 です")
      }

    const { children} = props
  return (
    <button onClick={methodDoesNotExist}>{children}</button>
  )
}
