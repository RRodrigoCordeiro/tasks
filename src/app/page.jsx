"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import Modal from "react-modal";

const Page = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([
    { id: 1, tarefa: "lavar as mãos", finalizada: false },
    { id: 2, tarefa: "levar o lixo para fora", finalizada: true },
    { id: 3, tarefa: "Fazer um bolo", finalizada: false },
    { id: 4, tarefa: "Lavar a louça", finalizada: false },
  ]);
  const [tarefaParaDeletar, setTarefaParaDeletar] = useState(null);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => {
    setModalAberto(false);
    setNovaTarefa("");
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const novaTarefaObj = {
      id: tarefas.length + 1,
      tarefa: novaTarefa,
      finalizada: false,
    };
    setTarefas([...tarefas, novaTarefaObj]);
    fecharModal();
  };

  const abrirModalConfirmacao = (id) => {
    setTarefaParaDeletar(id);
    setModalConfirmacaoAberto(true);
  };

  const fecharModalConfirmacao = () => {
    setModalConfirmacaoAberto(false);
    setTarefaParaDeletar(null);
  };

  const confirmarExclusao = () => {
    setTarefas(tarefas.map(tarefa => 
      tarefa.id === tarefaParaDeletar ? { ...tarefa, finalizada: true } : tarefa
    ));
    fecharModalConfirmacao();
  };

  const finalizarTarefa = (id) => {
    setTarefas(tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, finalizada: true } : tarefa
    ));
  };

  return (
    <>
      <div className=" flex flex-col  md:flex-row   md:justify-around mt-10 mb-28">
        <div className="flex">
          <img src="/Shape.png" alt="imagem do shape" className="w-[33.17px] h-[33px] top-[1.5px] gap-0 ml-7 md:ml-0" />
          <img src="/Logotype.png" alt="" className="relative w-[106.14px] h-[15.5px] top-[10.21px] left-4 gap-0 " />
        </div>
        <h1 className="text-base md:text-2xl font-semibold ml-8 mt-3 md:ml-20 md:mt-0">Bem vindo de volta, Marcus</h1>
        <p className="opacity-60 sm:text-base ml-8 mt-3 md:ml-0 md:mt-0">Segunda, 01 de dezembro de 2025</p>
      </div>

      <div className="bg-white border border-solid rounded-lg w-[450px] h-[446px] flex flex-col m-auto ">
        <h2 className="text-black opacity-55 text-center mt-8">Suas Tarefas de Hoje!</h2>

        {tarefas.filter(tarefa => !tarefa.finalizada).map((tarefa) => (
          <div key={tarefa.id} className="flex justify-around mt-8 w-[386px] m-auto bg-tasks border-2 border-dashed border-borderColor p-4 hover:cursor-pointer hover:border-none hover:rounded-md">
            <GrCheckbox className="w-[18px] h-[18px] mt-1" />
            <p className="text-black">{tarefa.tarefa}</p>
            <AiOutlineDelete className="h-[24px] w-[24px]" onClick={() => abrirModalConfirmacao(tarefa.id)} />
          </div>
        ))}

        <p className="text-black opacity-55 text-center mt-8">Tarefas finalizadas</p>
        
        {tarefas.filter(tarefa => tarefa.finalizada).map((tarefa) => (
          <div key={tarefa.id} className="flex justify-around mt-8 w-[386px] m-auto bg-tasks border-2 border-dashed border-borderColor p-4 hover:cursor-pointer hover:border-none hover:rounded-md">
            <GrCheckboxSelected className="w-[24px] h-[24px] text-customBlue bg-lightBlue" />
            <p className="text-black line-through opacity-55 ">{tarefa.tarefa}</p>
            <AiOutlineDelete className="h-[24px] w-[24px]"  />
          </div>
        ))}

        <button className="text-lg bg-gradient-to-r p-4  mb-16 from-bluelight to-bluedark block m-auto mt-16 w-[272px] h-[51px]  md:w-[450px] md:h-[51px] text-white" onClick={abrirModal}> 
          Adicionar nova tarefa
        </button>
      </div>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        className=" md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-custom w-[450px] h-[286px] rounded-md bg-white p-10 z-[1050]"
      >
        <div className="flex flex-col justify-start ">
          <h1 className="font-semibold text-3xl  md:text-xl mb-4">Nova Tarefa</h1>
          <p className="mb-3 text-xl  mt-3 md:mt-0 md:text-base ">Título</p>
          <input
            type="text"
            placeholder="Digite"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            className="p-3 rounded-lg border-2 border-solid mb-8 text-1xl md:text-base"
          />
        </div>
        <div className="flex flex-col   md:flex-row justify-evenly mt-6 gap-3">
          <button className="text-xl bg-cancel rounded-md sm:w-[272px] h-[48px] md:w-[185px] md:h-[51px]" onClick={fecharModal}>
            Cancelar
          </button>
          <button className="text-xl rounded-mdsm:w-[272px] h-[48px] md:w-[185px] md:h-[51px] bg-gradient-to-r p-4 from-bluelight to-bluedark" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>
      </Modal>

   []
      <Modal
        isOpen={modalConfirmacaoAberto}
        onRequestClose={fecharModalConfirmacao}
        shouldCloseOnOverlayClick={false}
        className=" md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-custom w-[450px] h-[200px] rounded-md bg-white p-10 z-[1050]"
      >
        <h2 className="font-semibold text-3xl  md:text-xl mb-4">Deletar tarefa</h2>
        <p className="opacity-55  text-xl md:text-base">Tem certeza que você deseja deletar essa tarefa?</p>
        <div className="flex flex-col   md:flex-row justify-evenly mt-6 gap-3 ">
          <button className="text-base bg-cancel rounded-md sm:w-[272px] h-[48px] md:w-[185px] md:h-[51px]" onClick={fecharModalConfirmacao}>
            Cancelar
          </button>
          <button className="text-base rounded-md sm:w-[272px] h-[48px] md:w-[185px] md:h-[51px] bg-gradient-to-r p-4 from-delete to-deleteTwo text-white" onClick={confirmarExclusao}>
            Deletar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Page;