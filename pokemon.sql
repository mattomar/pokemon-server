PGDMP     7                    }         
   pokemon_db #   15.7 (Ubuntu 15.7-0ubuntu0.23.10.1) #   15.7 (Ubuntu 15.7-0ubuntu0.23.10.1)     A           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            B           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            C           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            D           1262    32768 
   pokemon_db    DATABASE     v   CREATE DATABASE pokemon_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE pokemon_db;
                matt    false            �            1259    49162    Pokemons    TABLE     M  CREATE TABLE public."Pokemons" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    level integer NOT NULL,
    photo character varying(255),
    "trainerId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Pokemons";
       public         heap    matt    false            �            1259    49161    Pokemons_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Pokemons_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Pokemons_id_seq";
       public          matt    false    217            E           0    0    Pokemons_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Pokemons_id_seq" OWNED BY public."Pokemons".id;
          public          matt    false    216            �            1259    49153    Trainers    TABLE     4  CREATE TABLE public."Trainers" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    age integer NOT NULL,
    photo character varying(255),
    region character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Trainers";
       public         heap    matt    false            �            1259    49152    Trainers_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trainers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trainers_id_seq";
       public          matt    false    215            F           0    0    Trainers_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trainers_id_seq" OWNED BY public."Trainers".id;
          public          matt    false    214            �           2604    49165    Pokemons id    DEFAULT     n   ALTER TABLE ONLY public."Pokemons" ALTER COLUMN id SET DEFAULT nextval('public."Pokemons_id_seq"'::regclass);
 <   ALTER TABLE public."Pokemons" ALTER COLUMN id DROP DEFAULT;
       public          matt    false    217    216    217            �           2604    49156    Trainers id    DEFAULT     n   ALTER TABLE ONLY public."Trainers" ALTER COLUMN id SET DEFAULT nextval('public."Trainers_id_seq"'::regclass);
 <   ALTER TABLE public."Trainers" ALTER COLUMN id DROP DEFAULT;
       public          matt    false    214    215    215            >          0    49162    Pokemons 
   TABLE DATA           i   COPY public."Pokemons" (id, name, type, level, photo, "trainerId", "createdAt", "updatedAt") FROM stdin;
    public          matt    false    217   �       <          0    49153    Trainers 
   TABLE DATA           \   COPY public."Trainers" (id, name, age, photo, region, "createdAt", "updatedAt") FROM stdin;
    public          matt    false    215   �       G           0    0    Pokemons_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Pokemons_id_seq"', 26, true);
          public          matt    false    216            H           0    0    Trainers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Trainers_id_seq"', 5, true);
          public          matt    false    214            �           2606    49169    Pokemons Pokemons_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Pokemons" DROP CONSTRAINT "Pokemons_pkey";
       public            matt    false    217            �           2606    49160    Trainers Trainers_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trainers"
    ADD CONSTRAINT "Trainers_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trainers" DROP CONSTRAINT "Trainers_pkey";
       public            matt    false    215            �           2606    49170     Pokemons Pokemons_trainerId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES public."Trainers"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public."Pokemons" DROP CONSTRAINT "Pokemons_trainerId_fkey";
       public          matt    false    3241    215    217            >     x���]o�0�k�+z��	BJ��iQ���֥��lҤ��q��&%���v���L\��sL�L��X5ഐ�[-@V��.E�윗jU�R9(L�J�k~���Z�>�k����¬hd���iS�%c�P��
@1�CLC��(M	M�b�N��7����`�;�3�����^��*���k1�tɕt�7�$�p�����z{<^~��ly�#�ޒ+��,Y���l���z� }�2�2�(���s[�&���Xu�d�?��/7��~��l?�u;iM{:Y�{�=_}_�(�6gw��p[�Q0�*݂K#�hjMS��i��am��E�0����CV:�X!�0�\�^��D�E91��\`��1��eL(�{�$X���u� {�F�A�L�"�7L-w͌v�z��v��J��K�m.+XI��^�ԅ�9���-3�1&OU{E�n��V8����(Nq��F,��]g�=˔58�\u���ѓ{�����X���zp�
I$#�Xh E����i�a��_��G�/�o�=)�      <   �   x���Kk�0��ɯp_�M���즏M���mAtc�&���_�)�0���|�s?8���;)w�ǖNj�A�ݻ-*��ݪJ��X�n�@ps�*��#�v��v썚֙ ������Tg	r�|�>rQ
�A�����	E�7�;�K(������)�<�-��h@�{{n��v� �1���
7VDC�0W�`�{�
���<��j�Y7ɲ�B^�1��1�<�2@�!K���l�q.1�)��d�}c��/굵     