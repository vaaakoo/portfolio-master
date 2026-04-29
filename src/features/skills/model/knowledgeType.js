import {LANG_FRAMEWORKS, DATABASES, ARCHITECTURE, TOOLS_INFRA, FRONTEND} from "@/features/skills/skills.constants";

class KnowledgeType {
    constructor(type) {
        this.type = type;
    }

    static LANG_FRAMEWORKS = new KnowledgeType(LANG_FRAMEWORKS);
    static DATABASES = new KnowledgeType(DATABASES);
    static ARCHITECTURE = new KnowledgeType(ARCHITECTURE);
    static TOOLS_INFRA = new KnowledgeType(TOOLS_INFRA);
    static FRONTEND = new KnowledgeType(FRONTEND);


    dividerStyle() {
        switch (this.type) {
            case LANG_FRAMEWORKS:
                return 'divider-mobile'
            case DATABASES:
                return 'divider-db'
            case ARCHITECTURE:
                return 'divider-web'
            case TOOLS_INFRA:
                return 'divider-media'
            case FRONTEND:
                return 'divider-languages'
        }
    }

    progressStyle() {
        switch (this.type) {
            case LANG_FRAMEWORKS:
                return 'progress-mobile';
            case DATABASES:
                return 'progress-db';
            case ARCHITECTURE:
                return 'progress-web';
            case TOOLS_INFRA:
                return 'progress-media';
            case FRONTEND:
                return 'progress-languages';
        }
    }

    label() {
        return this.type.toUpperCase()
    }

    value() {
        return this.type
    }

    static values() {
        return [this.LANG_FRAMEWORKS, this.DATABASES, this.ARCHITECTURE, this.TOOLS_INFRA, this.FRONTEND];
    }
}

export default KnowledgeType