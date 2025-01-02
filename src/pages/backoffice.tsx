import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { PageComponent } from "../components/pageComp";
import { Backoffice as backoffice } from "../mock/data";
import { useEffect, useState } from "react";
import { ButtonPage } from "../components/ButtonPage";


export default function Backoffice () {
  const [getInfos, setInfos] = useState<any[]>()

  const searchQualiconsigDatas = () => {
    const data = backoffice
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
          <ButtonPage text={items.title} link={items.url} key={index}/>
        ))}
      </PageComponent>
    </Box>
  )
}