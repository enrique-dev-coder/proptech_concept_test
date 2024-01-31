'use client';

import { useContext } from 'react';
import Button from '@/ui/system/Button';
import GradientText from '@/ui/system/GradientText';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import PropTechSlider from '@/components/PropTechSlider';
import {
  classesPalleteBackgroundAlt,
  classesPalleteBackgorundSofts,
  classesPalleteBackgorunds,
  color,
} from '@/constants/colorConstants';

export default function Home() {
  const { colorPalette } = useContext(ColorThemeContext);

  return (
    <>
      {/* hero section */}
      <main className="h-screen max-w-screen-super-large flex items-center justify-center mx-auto ">
        {/* title */}
        <div className="w-1/2 h-full flex flex-col px-8 relative">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className=" text-5xl font-medium mb-4">
              <GradientText text="Empieza a invertir hoy mismo." />
            </h1>
            <h2 className="text-4xl font-medium mb-4 text-write-main">
              Otro texto bien aca para llamar la atencion.
            </h2>
            <div>
              <Button text="Buscar Propiedades" />
            </div>
          </div>
          <div
            className={`
          ${classesPalleteBackgorundSofts[colorPalette as color]}
          flex  items-center py-4 px-4`}
          >
            <p className="text-2xl   flex-1 font-bold">
              ¿Eres una desarrolladora inmobiliaria?
            </p>
            <div>
              <Button buttonType="ghost" text="Registrate" />
            </div>
          </div>
        </div>
        {/* decorative img bg */}
        <div className="w-1/2 h-full bg-[url('/assets/img/pexels-pixasquare-com-1115804.jpg')] bg-cover bg-no-repeat bg-center"></div>
      </main>
      {/*  Desarrolladoras que trabajan con nosotros */}
      <section className="max-w-screen-super-large mx-auto  py-12">
        <h2 className="text-center text-4xl font-bold">
          <GradientText text="Las mejores desarrolladoras trabajan con nosotros" />
        </h2>
        <div>
          <p className=" text-center text-lg">
            Logos en slider o alguna forma de presentacion, pueden ser algo asi
            como tarjetitas con datos de la desarrolladora ya que no creo sean
            muchas al principio
          </p>
        </div>
      </section>

      {/*  Quieres comprar una casa*/}
      <section className="max-w-screen-super-large mx-auto  py-12">
        <article className="flex w-full">
          <div
            className={`          
            ${classesPalleteBackgorunds[colorPalette as color]}
             w-[60%] p-4 flex flex-col justify-evenly
            `}
          >
            <h2 className=" text-white text-6xl">Quieres comprar una casa?</h2>
            <div>
              <Button text="Ver Propiedades" buttonType="soft" />
            </div>
          </div>
          <div className=" w-[40%]">
            <img src="assets/img/pexels-curtis-adams-3288102.jpg" />
          </div>
        </article>
      </section>
      {/*  Quieres invertir en departamentos en preventa*/}
      <section className="max-w-screen-super-large mx-auto  py-12">
        <article className="flex w-full">
          <div className=" w-[40%]">
            <img src="assets/img/pexels-tembela-bohle-1330753.jpg" />
          </div>
          <div
            className={`          
            ${classesPalleteBackgroundAlt[colorPalette as color]}
             w-[60%] p-4 flex flex-col justify-evenly
            `}
          >
            <h2 className=" text-white text-6xl text-left">
              Quieres invertir en departamentos en preventa?
            </h2>
            <div>
              <Button text="Invertir" buttonType="soft" />
            </div>
          </div>
        </article>
      </section>
      {/*  Slider de propiedades mas buscadas*/}
      <section className="max-w-screen-super-large mx-auto  py-12">
        <article className="w-full">
          <h2 className=" text-write-main text-center  text-5xl font-medium mb-6">
            Propiedades mas buscadas
          </h2>
          <PropTechSlider />
        </article>
      </section>
      {/*  Slider de propiedades mas buscadas*/}
      <section className="max-w-screen-super-large mx-auto  py-12">
        <article className="w-full">
          <h2 className=" text-write-main text-center  text-5xl font-medium mb-6">
            Yo creo en lo que resta de la apgina se pueden agregar elementos
            para aumentar la confiabilidad como testimonios, algunas
            estadisticas, un video etc
          </h2>
        </article>
      </section>
    </>
  );
}
