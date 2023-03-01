package com.desafio.application.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafio.application.entities.Cadastro;

public interface DadosCadastro extends JpaRepository <Cadastro, Long>{
    

}
