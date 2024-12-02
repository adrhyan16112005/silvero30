SELECT schema_name 
FROM information_schema.schemata;


CREATE TABLE public.aluno(
    ID SERIAL PRIMARY KEY,
    RA VARCHAR (255) NOT NULL,
  	NOME VARCHAR (255) NOT NULL,
	EDUCACENSO VARCHAR(1) NOT NULL,
	DATANACIMENTO date NOT NULL,
	IDADE VARCHAR (200) NOT NULL,
	CPF CHAR (11) NOT NULL
	);
INSERT INTO public.aluno (RA, NOME, EDUCACENSO, DATANASCIMENTO, IDADE, CPF) VALUES
('820', 'Lucas Henrique Oliveira Santos',    'N', '1990-05-14', '34 anos', '45612378901'),
('819', 'Ana Beatriz Costa Pereira',         'N', '2014-09-22', '10 anos', '78945612302'),
('818', 'Sofia Maria Almeida Rodrigues',     'N', '2023-11-01', '0 anos',  '32165498703'),
('817', 'Miguel Arthur Fernandes Lima',      'N', '2016-08-10', '8 anos',  '98732165404'),
('816', 'Davi Gabriel Martins Silva',        'N', '2015-03-27', '9 anos',  '65478932105'),
('815', 'Helena Vitória Cardoso Ribeiro',    'N', '2019-06-15', '5 anos',  '15935724606'),
('814', 'Alice Clara Torres Barbosa',        'N', '2020-11-20', '3 anos',  '75395184607');
