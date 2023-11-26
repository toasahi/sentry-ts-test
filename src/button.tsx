import * as Sentry from "@sentry/react";

type Props = {
    children: React.ReactNode;
}

export const Button:React.FC<Props> = (props) => {

    const methodDoesNotExist = () => {
        // throw new Error("typescriptを追加 です")
        Sentry.captureMessage("message",{
          extra:{
            password: 'jfdakaowejf',
            data: {
              password: "fjalkdfjaldsjfaodjfaojdf",
              card: "adflkjdfaldsjfao",
              username: "dajfadofaijei"
            }
          }
        })
      }

    const { children} = props
  return (
    <button onClick={methodDoesNotExist}>{children}</button>
  )
}
