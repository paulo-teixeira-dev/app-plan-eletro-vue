# ⚡ Aplicativo Plan - FRONT #

### Stack utilizada

- Node (Vue3)

### Ambiente de desenvolvimento

- Instale o docker no WSL(Windows Subsystem for Linux) com Ubuntu LTS 

### Construindo container

Criando containers

```
sudo docker compose up -d
```
Accesando aplicação

```
http://localhost:8080/
```
### Rotas
| Rota  | Função |
| --- | --- |
| http://localhost:8080/eletro | Listagem |
| http://localhost:8080/eletro/store/  | Cadastrar |
| http://localhost:8080/eletro/show/{id} | Visualizar |

### Portas
| Serviço  | Porta |
| --- | --- |
| Node | 8080 |

## 🚀 Sobre o desenvolvedor

Este projeto é desenvolvido e mantido por Paulo Teixeira.
