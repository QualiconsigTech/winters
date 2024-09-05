import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { PageComponent } from "../components/pageComp";
import { Parceiros as Parceiro} from "../mock/data";
import { useEffect, useState } from "react";
import { ButtonPage } from "../components/ButtonPage";


export default function Parceiros () {
  const [getInfos, setInfos] = useState<any[]>()

  const searchQualiconsigDatas = () => {
    const data = Parceiro
    setInfos(data)
  }
  useEffect( ()  => {
    searchQualiconsigDatas()
  },[])

  return (
    <Box>
      <Header/>
      <PageComponent>
        {getInfos?.map((items, index) => (
          <ButtonPage text={items.title} link={items.url} key={index} />
        ))}
      </PageComponent>
    </Box>
  )
}