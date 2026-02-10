import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import knex from "knex";

// Carrega as variáveis do .env
dotenv.config();

const supabaseUrl = "https://grrjgtomdagnbxkhiptn.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_API_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

class Database {
  async insertGroupJid(jid: string) {
    try {
      const { data, error } = await supabase
        .from("whatsapp_groups")
        .insert([{ jid: jid }]);

      if (error) {
        console.error("Erro do Supabase:", error.message);

        return null;
      }

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async removeGroupJid(jid: string) {
    try {
      const { data, error } = await supabase
        .from("whatsapp_groups")
        .delete()
        .eq("jid", "1234567890@g.us");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async haveGroupOnDatabase(jid: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from("whatsapp_groups")
        .select("jid")
        .eq("jid", jid)
        .maybeSingle(); // Retorna o objeto se achar, ou null se não achar

      if (error) throw error;

      if (data) {
        console.log("O grupo existe na tabela.");
        return true;
      } else {
        console.log("O grupo NÃO existe na tabela.");
        return false;
      }
    } catch (err) {
      console.error("Erro ao verificar JID:", err);
      return false;
    }
  }

  async getAllGroupJids() {
    try {
      const { data, error } = await supabase
        .from("whatsapp_groups")
        .select("jid"); // Seleciona apenas a coluna jid

      if (error) throw error;

      // O 'data' será algo como: [{ jid: '123@g.us' }, { jid: '456@g.us' }]
      return data;
    } catch (err) {
      console.error("Erro ao obter JIDs:", err.message);
      return [];
    }
  }

  async getAllUsersByGroup(groupJid: string){
    const { data, error } = await supabase
      .from('users')
      .select('*') // ou coloque as colunas que deseja: 'name, gold, jid'
      .eq('group_jid', groupJid); // Filtra pelo ID do grupo

    if (error) {
      console.error('Erro ao buscar usuários:', error);
      return [];
    }

    return data;
  }

  async addUserData(jid: string, lid: string, number: string, name: string, groupJid: string) {
    try {
      // 1. Tenta buscar uma linha que tenha os dois campos iguais
    const { data: usuarioExistente, error: searchError } = await supabase
      .from('users')
      .select('jid, group_jid')
      .eq('jid', jid)
      .eq('group_jid', groupJid)
      .maybeSingle(); // Retorna null se não encontrar nada

    if (searchError) throw searchError;

    // 2. Verificação manual
    if (usuarioExistente) {
      console.log(`⚠️ Registro ignorado: O usuário ${jid} já existe no grupo ${groupJid}`);
      return null;
    }


      const { data, error } = await supabase
        .from("users")
        .upsert([
          {
            jid: jid,
            lid: lid,
            number: number,
            group_jid: groupJid, // Salvando o grupo xxxxxxx@g.us
            name: name
          },
        ])
        .select();

      if (error) throw error;
      return data;
    } catch (e) {
      console.error("Erro ao salvar usuário:", e.message);
    }
  }

  async setQuizChances(jid: string, group_jid: string, quizChances: number) {
  try {
    // 3. Atualizamos ou Inserimos usando o JID e GRUPO_JID como âncoras
    const { data, error } = await supabase
      .from('users')
      .update(
        { 
          quiz_chances: Number(quizChances),
          last_quiz_time: new Date().toISOString()
        }, 
      )
      .eq('jid', jid)           // Filtro para encontrar o usuário certo
      .eq('group_jid', group_jid) // Filtro para garantir que é no grupo certo
      .select();

    if (error) throw error;

    return data;

  } catch (e) {
    console.error("Erro ao definir ouro:", e);
    return null;
  }
  }

  async setUserGold(jid: string, grupo_jid: string, goldAmount: number) {
  try {
    // 3. Atualizamos ou Inserimos usando o JID e GRUPO_JID como âncoras
    const { data, error } = await supabase
      .from('users')
      .update(
        { 
          jid: jid, 
          group_jid: grupo_jid, 
          gold: Number(goldAmount),
        }, 
      )
      .eq('jid', jid)           // Filtro para encontrar o usuário certo
      .eq('group_jid', grupo_jid) // Filtro para garantir que é no grupo certo
      .select();

    if (error) throw error;

    return data;

  } catch (e) {
    console.error("Erro ao definir ouro:", e);
    return null;
  }
  }

  async setPickage(jid: string, grupo_jid: string, pickaxeDurability: number) {
    try {
      // 3. Atualizamos ou Inserimos usando o JID e GRUPO_JID como âncoras
      const { data, error } = await supabase
        .from('users')
        .update(
          { 
            pickaxe_durability: Number(pickaxeDurability),
          }, 
        )
        .eq('jid', jid)           // Filtro para encontrar o usuário certo
        .eq('group_jid', grupo_jid) // Filtro para garantir que é no grupo certo
        .select();

      if (error) throw error;

      return data;

    } catch (e) {
      console.error("Erro ao definir ouro:", e);
      return null;
    }
  }

  async getUserInfoByJid(
    jid: string, 
    grupo_jid: string
  ) {
  try {
    // 1. Primeiro, buscamos o saldo atual do usuário naquele grupo específico
    const { data: user, error: searchError } = await supabase
      .from('users')
      .select('*')
      .eq('jid', jid)
      .eq('group_jid', grupo_jid)
      .maybeSingle();

    if (searchError) throw searchError;

    return user
  } catch (e) {
    console.error("Erro ao definir ouro:", e);
    return null;
  }
  }

  async getUserInfoByLid(
    lid: string, 
    grupo_jid: string
  ) {
  try {
    // 1. Primeiro, buscamos o saldo atual do usuário naquele grupo específico
    const { data: user, error: searchError } = await supabase
      .from('users')
      .select('*')
      .eq('lid', lid)
      .eq('group_jid', grupo_jid)
      .maybeSingle();

    if (searchError) throw searchError;

    return user
  } catch (e) {
    console.error("Erro ao definir ouro:", e);
    return null;
  }
  }

  async getUserGold(
    jid: string, 
    grupo_jid: string
  ): Promise<number | null> {
  try {
    // 1. Primeiro, buscamos o saldo atual do usuário naquele grupo específico
    const { data: user, error: searchError } = await supabase
      .from('users')
      .select('gold')
      .eq('jid', jid)
      .eq('group_jid', grupo_jid)
      .maybeSingle();

    if (searchError) throw searchError;

    return user?.gold || 0
  } catch (e) {
    console.error("Erro ao definir ouro:", e.message);
    return null;
  }
  }

  async getQuizChances(
    jid: string, 
    grupo_jid: string
  ): Promise<number | null> {
  try {
    // 1. Primeiro, buscamos o saldo atual do usuário naquele grupo específico
    const { data: user, error: searchError } = await supabase
      .from('users')
      .select('quiz_chances')
      .eq('jid', jid)
      .eq('group_jid', grupo_jid)
      .maybeSingle();

    if (searchError) throw searchError;

    return user?.quiz_chances || 0
    } catch (e) {
      console.error("Erro ao definir ouro:", e);
      return null;
    }
  }

}
export default Database;

/*
const db = require('knex')({
  client: 'sqlite3',
  connection: { filename: './meu_banco.sqlite' },
  useNullAsDefault: true 
});

async function inicializarBanco() {
  // 1. Tenta criar a tabela 'usuarios' se ela não existir.
  // Isso força o driver a criar o arquivo do banco de dados.
  await db.schema.createTableIfNotExists('usuarios', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('idade');
  });
  console.log("Banco de dados SQLite conectado e tabela 'usuarios' verificada.");
}

async function buscarUsuarios() {
  // SELECT nome, idade FROM usuarios;
  const usuarios = await db('usuarios').select('nome', 'idade');
  console.log(usuarios);
}

// Chame a inicialização antes de buscar
inicializarBanco()
  .then(buscarUsuarios)
  .catch(err => console.error("Erro fatal:", err));
*/
