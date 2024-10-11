import Head from "next/head";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";
import '../i18n';

const orbitron = Orbitron({ subsets: ["latin"] });

import { useTranslation } from 'react-i18next';
import { Button, ButtonsContainer, ContentContainer, FlagButton, InputsContainer, LanguageButtonsContainer, MainContainer, Result, SecondaryButton, Title, TitleContainer } from "@/types";
import Input from "@/ui/Input";
import i18next from "i18next";

export default function Home() {

  const { t } = useTranslation();

  const [currentLatitude, setCurrentLatitude] = useState("");
  const [targetInclination, setTargetInclination] = useState("");
  const [speedOnPlanet, setSpeedOnPlanet] = useState("");
  const [finalOrbitVelocity, setFinalOrbitVelocity] = useState("");
  const [realLaunchAzimuth, setRealLaunchAzimuth] = useState("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // To avoid 'SSR / client' rendering errors
    setIsMounted(true);
  }, []);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  }

  const computeRoughAzimuth = () => {
    // Here we compute launch azimuth the simple way, without taking planet movement into account
    // It's faster and easier but less accurate

    // Cosinus of current latitude converted to degrees
    const currentLatitudeCOS = Math.cos(currentLatitude * Math.PI / 180);

    // Cosinus of target inclination converted to degrees
    const targetInclinationCOS = Math.cos(targetInclination * Math.PI / 180);

    // current rough azimuth but in radian
    const arcsinRadian = Math.asin(targetInclinationCOS / currentLatitudeCOS);

    // current rough azimuth in degrees
    const currentRoughAzimuth = arcsinRadian * 180/Math.PI;

    return { currentRoughAzimuth, arcsinRadian };
  }

  const computeRealAzimuth = () => {
    // Here we compute the real azimuth, taking planet movement and target velocity into account.
    // It's more complex and asks for more info but it's much more accurate

    const { arcsinRadian } = computeRoughAzimuth();
    const roughLaunchAzimuthTan = Math.tan(arcsinRadian);
    const roughLaunchAzimuthCos = Math.cos(arcsinRadian);

    const currentRealLaunchAzimuth = Math.atan(roughLaunchAzimuthTan - speedOnPlanet/(finalOrbitVelocity * roughLaunchAzimuthCos)) * 180/Math.PI;

    const isIncompleteForm = !currentLatitude || !finalOrbitVelocity || !speedOnPlanet || !targetInclination;

    if (isIncompleteForm) {
      return;
    }

    setRealLaunchAzimuth(currentRealLaunchAzimuth);
  }

  const clearValues = () => {
    setCurrentLatitude("");
    setFinalOrbitVelocity("");
    setSpeedOnPlanet("");
    setTargetInclination("");
    setRealLaunchAzimuth("");
  }

  if (!isMounted) {
    return null;
  }

  const valueToDisplay = realLaunchAzimuth ? `${realLaunchAzimuth?.toFixed(2)}°  /  ${(180 - realLaunchAzimuth)?.toFixed(2)}°` : null;

  return (
    <>
      <Head>
        <title>Orbiter Azimuth Calculator</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainContainer>
        <TitleContainer>
          <Title className={orbitron.className}>
            {t('title')}
          </Title>
          <LanguageButtonsContainer>
            <FlagButton onClick={() => handleChangeLng("fr")}><img src="/france.png" /></FlagButton>
            <FlagButton onClick={() => handleChangeLng("en")}><img src="/usa.png" /></FlagButton>
          </LanguageButtonsContainer>
        </TitleContainer>

        <ContentContainer>
          <InputsContainer>
            <Input label={t("labels.currentLatitude")} type="number" name='currentLatitude' value={currentLatitude} onChange={(e) => setCurrentLatitude(e.target.value)} />
            <Input label={t("labels.targetInclination")} type="number" name='targetInclination' value={targetInclination} onChange={(e) => setTargetInclination(e.target.value)} />
            <Input label={t("labels.speedOnPlanet")} type="number" name='speedOnPlanet' value={speedOnPlanet} onChange={(e) => setSpeedOnPlanet(e.target.value)} />
            <Input label={t("labels.finalOrbitVelocity")} type="number" name='finalOrbitVelocity' value={finalOrbitVelocity} onChange={(e) => setFinalOrbitVelocity(e.target.value)} />
          </InputsContainer>
          <ButtonsContainer>
            <SecondaryButton className={orbitron.className} onClick={clearValues}>{t('actions.clear')}</SecondaryButton>
            <Button className={orbitron.className} onClick={computeRealAzimuth}>{t('actions.compute')}</Button>
          </ButtonsContainer>
          <Result className={orbitron.className}>
            {valueToDisplay}
          </Result>
        </ContentContainer>
      </MainContainer>
    </>
  );
}
