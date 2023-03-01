package com.desafio.application.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cadastro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;                 //*
    
    @Column(nullable = false)
    private String email;                //*
    
    @Column(nullable = false)
    private String tipoPessoa;            //Pessoa física ou Pessoa jurídica *
    
    @Column(nullable = true)//por ora deixar nulo para fins de testes
    private String cpf;                  //* (Exibido se a opção Pessoa física for selecionada). Campo deve possuir máscara e validação.
    
    @Column(nullable = true)//por ora deixar nulo para fins de testes
    private String cnpj;                 //* (Exibido se a opção Pessoa jurídica for selecionada). Campo deve possuir máscara e validação.
    
    @Column(nullable = false)
    private String cep;                  //* (deve possuir máscara e validação)
    
    @Column(nullable = false)
    private String endereco;             //**
    
    @Column(nullable = false)
    private String complemento;           //**
    
    @Column(nullable = false)
    private String bairro;               //**
    
    @Column(nullable = false)
    private String cidade;               //**
    
    @Column(nullable = false)
    private String estado;               //**
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getTipoPessoa() {
        return tipoPessoa;
    }
    public void setTipoPessoa(String tipoPessoa) {
        this.tipoPessoa = tipoPessoa;
    }

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCep() {
        return cep;
    }
    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComplemento() {
        return complemento;
    }
    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }
    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

    
}
