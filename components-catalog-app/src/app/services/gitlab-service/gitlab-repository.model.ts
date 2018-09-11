export interface IRepository {
  links: ILinks;
  namespace: INamespace;
  sharedWithGroup: ISharedWithGroup;
  groupAccess: IGroupAccess;
  permissions: IPermissions;
  rootObject: IRootObject;
}


export interface ILinks {
  self: string;
  issues: string;
  merge_requests: string;
  repo_branches: string;
  labels: string;
  events: string;
  members: string;
}

export interface INamespace {
  id: number;
  name: string;
  path: string;
  kind: string;
  full_path: string;
  parent_id?: number;
}

export interface ISharedWithGroup {
  group_id: number;
  group_name: string;
  group_access_level: number;
}

export interface IGroupAccess {
  access_level: number;
  notification_level: number;
}

export interface IPermissions {
  project_access?: any;
  group_access: IGroupAccess;
}

export interface IRootObject {
  id: number;
  description: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: Date;
  default_branch: string;
  tag_list: any[];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  avatar_url?: any;
  star_count: number;
  forks_count: number;
  last_activity_at: Date;
  _links: ILinks;
  archived: boolean;
  visibility: string;
  resolve_outdated_diff_discussions: boolean;
  container_registry_enabled: boolean;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  shared_runners_enabled: boolean;
  lfs_enabled: boolean;
  creator_id: number;
  namespace: INamespace;
  import_status: string;
  open_issues_count: number;
  public_jobs: boolean;
  ci_config_path?: any;
  shared_with_groups: ISharedWithGroup[];
  only_allow_merge_if_pipeline_succeeds: boolean;
  request_access_enabled: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  printing_merge_request_link_enabled: boolean;
  permissions: IPermissions;
}
