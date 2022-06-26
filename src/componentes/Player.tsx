import { DefaultUi, Player as VideoPlayer, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';

export function Player() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <VideoPlayer>
            <Youtube videoId="NpEaa2P7qZI" />
            <DefaultUi />
          </VideoPlayer>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              harum atque dolore eum labore quae neque est, reprehenderit,
              exercitationem ipsum, dicta tempore id sit dolorum assumenda ex
              laboriosam facilis beatae.
            </p>

            <div className="flex items-center gap-5 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/pmarcosfelipe.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Marcos Felipe
                </strong>
                <span className="text-gray-200 text-sm block">Bio</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href=""
              className="p-4 text-sm border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2 w-full">
                Acesse o material complementar para acelerar seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2 w-full">
                Baixe wallpapers exlcusivos
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
