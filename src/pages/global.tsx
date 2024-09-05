import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { PageComponent } from "../components/pageComp";
import { QualiconsigOutput } from "../mock/data";
import { useEffect, useState } from "react";
import { ButtonPage } from "../components/ButtonPage";


export default function Global () {
  const [getInfos, setInfos] = useState<any[]>()

  const searchQualiconsigDatas = () => {
    const data = QualiconsigOutput
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