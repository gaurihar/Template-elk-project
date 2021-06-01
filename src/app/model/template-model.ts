export interface TName{
  order?:number;
  version?: number
  index_patterns:string[];
   settings?:Settings
   mappings?:Mappings
   aliases?: Aliases;
  }

export interface Template{
  settings?:Settings
  mappings:Mappings
}

export interface Settings {
  index: Index;
}

export interface Index {
  lifecycle?: Lifecycle;
  number_of_shards: string;
  auto_expand_replicas?: string;
  number_of_replicas?: string;
  format?: string;
  refresh_interval?: string;
  priority?: string;
  hidden?:boolean
}

export interface Amapper
{
is_hidden?:boolean
}

export interface Aliases
{
[key:string]: Amapper;
}



export interface Lifecycle {
  name: string;
}

export interface Mappings{
    _meta?:Meta
    dynamic: boolean;
    properties: Property;
  }

export interface Meta
{
version:string	
}


export interface Attributes{
  name: string;
  type:string;
  format?:string;
}

export interface Mapper{
  type:string;
  format?:string;
}

export interface Property{
  [key:string]: Mapper;
}